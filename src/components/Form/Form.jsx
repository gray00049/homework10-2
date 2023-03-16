import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addService, changeService, changeServiceId } from '../../actions/actionCreators'
import OneButton from "./OneButton";
import TwoButtons from "./TwoButtons";

export default function Form() {
  const [nameFieldValue, changeNameField] = useState('');
  const [priceFieldValue, changePriceField] = useState('');

  const changedServices = useSelector(state => state.changeServiceId);
  const services = useSelector(state => state.serviceList);
  const dispatch = useDispatch();

  const handleChangeValue = evt => {
    const input = evt.target;
    if (input.id == 'nameService') {
      changeNameField(input.value);
    } else {
      changePriceField(input.value);
    }
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(addService(nameFieldValue, priceFieldValue));
    changeNameField('');
    changePriceField('');
  }

  const handleChangeService = evt => {
    evt.preventDefault();
    dispatch(changeService(changedServices, nameFieldValue, priceFieldValue));
    dispatch(changeServiceId());
  }

  let buttonBlock = changedServices ? <TwoButtons onChange={handleChangeService} /> : <OneButton />

  const changeForm = () => {
    if (changedServices) {
      const { name, price } = services.find(item => item.id == changedServices)
      changeNameField(name);
      changePriceField(price);
    } else {
      changeNameField('');
      changePriceField('');
    }
  }
  
  useEffect(() => {
    changeForm()
  }, [changedServices])

  return (
    <form className="row my-4" onSubmit={handleSubmit}>
      <div className="col-4">
        <input 
          type="text" 
          id="nameService"
          className="w-100 h-100 px-2 rounded border" 
          placeholder="Введите услугу"
          required
          value={nameFieldValue}
          onChange={handleChangeValue}
        />
      </div>
      <div className="col-4">
        <input 
          type="number" 
          id="priceService"
          className="w-100 h-100 px-2 rounded border" 
          placeholder="Введите стоимость"
          required
          value={priceFieldValue}
          onChange={handleChangeValue}
        />
      </div>
      {buttonBlock}
    </form>
  )
}