import { createContext, useState, useEffect } from "react";
const FeedbackContext = createContext()

export const FeedbackProvider = ({children})=>{
    const [feedback, setFeedback]= useState([])
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })
    useEffect(()=>{
        fetchFeedbackData()
    },[])
    const fetchFeedbackData = async ()=>{
        const response = await fetch(`/feedback?_sort=id&_order=desc`)
        const data = await response.json()
        setFeedback(data)
    }

    const deleteFeedback = async (id)=>{
        
        if(feedbackEdit.edit === true){
            alert('cannot delete in edit mode')
        }else if(window.confirm('Are you sure')){
            await fetch(`/feedback/${id}`,{method: 'DELETE'})
            setFeedback(feedback.filter((item)=> item.id !== id))
        }
    }
    const addFeedback = async (newFeedback)=>{
        const response = await fetch(`/feedback`,{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFeedback),
        })
        const data = await response.json()
        setFeedback([data,...feedback])
        
    }
    const editFeedback = (item)=>{
        setFeedbackEdit({
            item,
            edit:true,
        })
    }
    const UpdateItem = async (id, upDItem)=>{
        const response = await fetch(`/feedback/${id}`,{
            method: 'PUT',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(upDItem),
        })
        const data = await response.json()

        setFeedback(feedback.map((item)=>
            item.id === id ? {...item, ...data} : item
    ))
    }

    return <FeedbackContext.Provider
    value = {{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        UpdateItem,
    }}
    >
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext