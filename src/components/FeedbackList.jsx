import FeedbackItem from './FeedbackItem'
import {motion, AnimatePresence} from 'framer-motion'



function FeedbackList({feedback, handleDelete}) {
    if (!feedback || feedback.length === 0){
        return <p>No feedback yet</p>
    }

    return (
        <AnimatePresence>
            <div className="feedback-list">
                {feedback.map((item) => (
                    <motion.div key={item.id} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0n}}>
                        <FeedbackItem key = {item.id}  item={item} handleClick={handleDelete}/>
                    </motion.div>
                    
                ))}
            </div>
        </AnimatePresence>      
    )
}

export default FeedbackList