import './MailList.css'

const MailLIst = () => {
  return (
    <div className='Mail'>
      <h1 className="MailTitle"> Save Time, Save Money!</h1>
      <span className="mailDesc">Sign Up And We'll Send The Best Deals To You</span>
      <div className="MailInputContainer">
        <input type="text" placeholder='Your Email' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default MailLIst
