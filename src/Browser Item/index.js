import './index.css'

const BrowserHistory = props => {
  const {browserDetails, deleteItem} = props
  const {id, timeAccessed, domainUrl, logoUrl, title} = browserDetails
  const onClickButton = () => {
    deleteItem(id)
  }

  return (
    <>
      <div className="browser-container">
        <p className="time-card">{timeAccessed}</p>
        <div>
          <div className="domain-card">
            <img src={logoUrl} alt="logoUrl" className="img" />
            <div className="card-card">
              <p className="title">{title}</p>
              <p className="domain-url">{domainUrl}</p>
            </div>

            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
              alt="delete"
              className="delete-icon"
              onClick={onClickButton}
            />
          </div>
        </div>
      </div>
    </>
  )
}
export default BrowserHistory
