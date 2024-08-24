import './index.css'

const BrowserHistory = props => {
  const {browserDetails, deleteItem} = props
  const {id, timeAccessed, domainUrl, logoUrl, title} = browserDetails
  const onClickButton = () => {
    deleteItem(id)
  }

  return (
    <>
      <li>
        <div className="browser-container">
          <p className="time-card">{timeAccessed}</p>
          <div>
            <div className="domain-card">
              <img src={logoUrl} alt="domain logo" className="img" />
              <div className="card-card">
                <p className="title">{title}</p>
                <p className="domain-url">{domainUrl}</p>
              </div>
              <button data-testid="delete" className="button" type="button" onClick={onClickButton} >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
                  alt="delete"
                  className="delete-icon"
                  
                />
              </button>
            </div>
          </div>
        </div>
      </li>
    </>
  )
}
export default BrowserHistory
