import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
  setHoveredFeature,
  toggleResultsDrawer
} from '../../store/actions';


const Card = ({
    vessel_name,
    year_sunk,
    location_latitude,
    location_longitude,
    id,
    history_summary,
    hoverId,
    jumpTo,
    popUp
  }) => {

  let windowWidth = useSelector(state => state.windowWidth);
  const dispatch = useDispatch();

  function handleMouseOver() {
    dispatch(setHoveredFeature(hoverId))
  }

  
  function handleOnClick() {
    jumpTo(location_longitude, location_latitude);
    popUp(location_longitude, location_latitude, id);

    if (windowWidth <= 500) {
      dispatch(toggleResultsDrawer(false));
    }
  }

  return (
    <li className="card margin-top-bottom"
      onClick={ () => handleOnClick() }
      onMouseOver={ () => handleMouseOver() }>

      <div className="card-header">
        <h1>{ vessel_name } { year_sunk && year_sunk !== 'null' && ` (${year_sunk})` }</h1>
        { location_latitude && location_longitude && 
          <h2>{ location_latitude }, { location_longitude }</h2>
        }
      </div>

      <div className="card-content">
        { history_summary !== 'null' &&
          <p>{ history_summary && history_summary.slice(0, 150) }</p>
        }
      </div>
    </li>
  )
}


export default Card;
