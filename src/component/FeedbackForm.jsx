import Card from "./shared/Card"
import Bottun from "./shared/Bottun"
import RatingSelect from "./RatingSelect"
import { useState, useContext, useEffect } from "react"
import FeedbackContext from "../context/FeedbackContext"
function FeedbackForm() {
    const [text, setText]= useState('')
    const [rating, setRating]= useState(10)
    const [btnDisabled, setBtnDisabled]= useState(true)
    const [message, setMessage]= useState('')
    const {addFeedback, feedbackEdit, UpdateItem}= useContext(FeedbackContext)
    useEffect(()=>{
        if(feedbackEdit.edit === true){
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    },[feedbackEdit])
    const handleTextChange = (e)=>{
        if(text === ''){
            setBtnDisabled(true)
            setMessage(null)
        }else if(text !== '' && text.trim().length <= 10){
            setBtnDisabled(true)
            setMessage('text is less than 10 characters')
        }else{
            setBtnDisabled(false)
            setMessage(null)
        }
        setText(e.target.value)
    }
    
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(text.trim().length >=10){
        const newFeedback = {
            rating,
            text
        }
        if(feedbackEdit.edit === true){
            UpdateItem(feedbackEdit.item.id, newFeedback)
            feedbackEdit.edit = false;
        }else{
            addFeedback(newFeedback)
        }
        setText('')
        setBtnDisabled(true);
    }
        
    }
    return (
        <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate our service!</h2>
        <RatingSelect select={(rating)=> setRating(rating)} />
        <div className="input-group">
        <input 
        type="text"  
        placeholder="write a review"
        onChange={handleTextChange}
        value={text}
        />
        <Bottun type='submit' isDisabled={btnDisabled}>send</Bottun>
        </div>
        {message && <div className="message">{message}</div>}
        </form>
        </Card>
    )
    }

export default FeedbackForm
