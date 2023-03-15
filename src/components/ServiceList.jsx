import { useDispatch, useSelector } from "react-redux";
import { removeService, changeServiceId } from "../actions/actionCreators";
import ServiceItem from "./ServiceItem";

export default function ServiceList() {
  const services = useSelector(state => state.serviceList);
  const changed = useSelector(state => state.changeServiceId);
  const dispatch = useDispatch();

  const handleRemoveItem = (id) => {
    if (changed) {
      alert('Перед удалением закончите редактирование записи');
    } else {
      dispatch(removeService(id));
    }
  }

  const handleChangeItem = (id) => {
    dispatch(changeServiceId(id));
  }

  return (
    <ul className="list-group">
      {services.map(item => (
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