import React, { PureComponent } from 'react';
import { showRequest } from 'actions/show';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getShowLoading, getShowSelect } from 'selectors/showSelectors';
import './ShowPage.css';

class ShowPage extends PureComponent {
  componentDidMount() {
    const { showRequest, match } = this.props;
    showRequest(match.params.id);
  }

  getSerial(id) {
    const { select } = this.props;
    if (!select.id) {
      return null;
    }
    const actors = select._embedded.cast.map(({ person }) => ({
      name: person.name,
      image: person.image ? person.image.medium : null
    }));
    return {
      name: select.name,
      image: select.image ? select.image.medium : null,
      summary: select.summary,
      actors: actors
    };
  }

  render() {
    const { isLoading, match } = this.props;
    const id = match.params.id;
    if (isLoading) return <p>Загрузка данных...</p>;
    const select = this.getSerial(id);
    if (!select) return null;
    const { name, image, summary, actors } = select;

    return (
      <div>
        <p>{name}</p>
        {image && <img src={image} alt={name} />}
        <div dangerouslySetInnerHTML={{ __html: summary }} />
        <div className="actors-list">
          {actors.map((actor, index) => (
            <div key={actor.name + index} className="t-person">
              <p>{actor.name}</p>
              {actor.image && <img src={actor.image} alt={actor.name} />}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: getShowLoading(state),
  select: getShowSelect(state)
});

const mapDispatchToProps = {
  showRequest
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ShowPage)
);
