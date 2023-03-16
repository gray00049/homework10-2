import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeService, changeServiceId } from "../../actions/actionCreators";
import ServiceItem from "./ServiceItem";

export default function ServiceList() {
  const services = useSelector(state => state.serviceList);
  const changed = useSelector(state => state.changeServiceId);
  const filterQuery = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleRemoveItem = (id) => {
    if (changed == id) {
      if (confirm('Удаление записи во время редактирования приведет к потере данных. Продолжить?')) {
        dispatch(changeServiceId());
        dispatch(removeService(changed));
      }
    } else {
      dispatch(removeService(id));
    }
  }

  const handleChangeItem = (id) => {
    dispatch(changeServiceId(id));
  }

  return (
    <ul className="list-group">
      {services.filter(item => item.name.toLowerCase().includes(filterQuery.toLowerCase())).map(item => (
        <ServiceItem 
          key={item.id} 
          service={item}
          onChange={() => handleChangeItem(item.id)}
          onDelete={() => handleRemoveItem(item.id)}
        />
      ))}
    </ul>
  )
}