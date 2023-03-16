export default function ServiceItem({ service, onDelete, onChange }) {
  return (
    <li className="list-group-item p-0 fs-5">
      <div className="d-flex">
        <span className="py-2 px-4 flex-fill">
          {service.name}
        </span>
        <span className="col-2 px-4 py-2 border-start border-end text-center">
          {service.price}
        </span>
        <div>
          <button 
            type="button" 
            className="btn btn-link link-success" 
            onClick={onChange}
          >Edit</button>
          <button 
            type="button" 
            className="btn btn-link link-danger" 
            onClick={onDelete}
          >Delete</button>
        </div>
      </div>
    </li>
  )
}