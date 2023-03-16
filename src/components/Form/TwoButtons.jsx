import { useDispatch } from 'react-redux'
import { changeServiceId, changeService } from '../../actions/actionCreators'

export default function TwoButtons({ onChange }) {
  const dispatch = useDispatch();

  const handleCancel = evt => {
    evt.preventDefault();
    dispatch(changeServiceId(''))
  }

  return (
    <>
      <div className="col-2">
        <button 
          className="btn btn-outline-success w-100" 
          onClick={onChange}
        >Save</button>
      </div>
      <div className="col-2">
        <button 
          className="btn btn-danger w-100" 
          onClick={handleCancel}
        >Cancel</button>
      </div>
    </>
  )
}