
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs, { init } from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import './contact.css';
import {Button, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

init("user_Ukn70TsMi3ZLt9JXdvXiC");

const ContactForm = () => {
     const { register,  handleSubmit, reset, formState: { errors }, } = useForm();
     const [disabled, setDisabled] = useState(false);

     const toastifySuccess = () => {
          toast('Form sent!', {
            position: 'bottom-right',
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            className: 'submit-feedback success',
            toastId: 'notifyToast'
          });
        };

     const onSubmit = async (data) => {
          try {
               setDisabled(true);
               const templateParams = {
                 name: data.name,
                 email: data.email,
                 subject: data.subject,
                 message: data.message
               };
               await emailjs.send(
                 'service_rqkx84s',
                 'template_284gv1p',
                 templateParams,
                 'user_Ukn70TsMi3ZLt9JXdvXiC'
               );
               reset();
               toastifySuccess();
               setDisabled(false);
             } catch (e) {
               console.log(e);
             }
     };
   
     return (
       <div className='ContactForm'>
         <div className='container'>
           <div className='row'>
             <div className='col-12 text-center'>
               <div className='contactForm'>
                    
                    <form onSubmit={handleSubmit(onSubmit)} id='contact-form' noValidate>
                          {/* Row 1 of form */}
                          <div className='text-container'>
                              <div className='text-l1'>Contact Us</div>
                              <div className='text-l2'>Send us a message anything! </div>
                              <div className='text-l3'>feedback, concerns or invite party!</div>
                         </div>
                         <div className='row formRow'>

                              <div className='col-6'>
                                   <Form.Control 
                                   className='form-control-formInput'
                                   placeholder=' Name'
                                   {...register("name", { required: true, message: 'Please enter your name', maxLength:{value:30, message:'Please use 30 characters or less'} })} />
                                   {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
                              </div>

                              <div className='col-6'>
                                   <Form.Control 
                                   className='form-control-formInput'
                                   type='email'
                                   placeholder=' Email address'
                                   {...register("email", { required: true, pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, maxLength:30 })} />
                                   {errors.subject && (
                                        <span className='errorMessage'>{errors.subject.message}</span>
                                   )}
                              </div>
                         </div>
                               {/* Row 2 of form */}
                         <div className='row formRow'>
                              <div className='col'>
                              <Form.Control 
                              className='form-control-formInput'
                              type='text'
                              name='subject'
                              placeholder=' Subject'
                              {...register("subject", { required: true, message: 'Please enter a subject', maxLength: {value:75, message:'Subject cannot exceed 75 characters'} })} />
                              {errors.subject && (
                                   <span className='errorMessage'>{errors.subject.message}</span>
                              )}
                              </div>
                         </div>

                         <div className='row formRow'>
                         <div className='col'>
                              
                              <Form.Control 
                              as="textarea"
                              className='form-control-formInput'
                              placeholder=' Message'
                              rows={3}
                              name='message' 
                              {...register("message", { required: true})} />
                              {errors.message && <span className='errorMessage'>Please enter a message</span>}
                         </div>
                         </div>
                         
                       
                         <Button style={{color:'#fff', backgroundColor:'#fb009e', fontWeight:'bold'}} className='submit-btn' variant="flat" type="submit" disabled={disabled}>
                         SEND
                         </Button>  
                         
                    </form>
                    <br />
                    <br />
               </div>
               <ToastContainer />
             </div>
           </div>
         </div>
       </div>
  );
};

export default ContactForm;