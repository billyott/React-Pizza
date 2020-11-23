import React from "react"

const PizzaForm = (props) => {

  const localHandleFormChange = (e) => {
    console.log({editPizzaTopping: e.target.value})
    if (e.target.name === "topping") {
      props.handleFormChange({editPizzaTopping: e.target.value})
    } else if (e.target.name === "size") {
      props.handleFormChange({editPizzaSize: e.target.value})
    } else if (e.target.name === "vegetarian-yes") {
      props.handleFormChange({editPizzaVegetarian: e.target.value})
    } else if (e.target.name === "vegetarian-no") {
      props.handleFormChange({editPizzaVegetarian: !e.target.value})
    } else {null}
  }

  const localHandleFormSubmit = (e) => {
    props.handleSubmitForm(e)
  }

  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" placeholder="Pizza Topping" name="topping" value={props.editPizzaTopping} onChange={localHandleFormChange}/>
        </div>
        <div className="col">
          <select value={props.editPizzaSize} className="form-control" name="size" onChange={localHandleFormChange}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Vegetarian" name="vegetarian-yes" checked={props.editPizzaVegetarian} onChange={localHandleFormChange}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Not Vegetarian" name="vegetarian-no" checked={!props.editPizzaVegetarian} onChange={localHandleFormChange}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={localHandleFormSubmit}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
