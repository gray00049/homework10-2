import { useDispatch, useSelector } from "react-redux"
import { changeFilterQuery } from "../actions/actionCreators";

export default function Filter() {
  const filterQuery = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleChangeFilter = evt => {
    dispatch(changeFilterQuery(evt.target.value))
  }

  return (
    <input 
      type="text" 
      className="w-100 mb-3 p-2 border rounded"
      placeholder="Введите запрос для фильтрации"
      value={filterQuery}
      onChange={handleChangeFilter}
    />
  )
}