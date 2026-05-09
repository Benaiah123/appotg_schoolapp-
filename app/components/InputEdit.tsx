import React from 'react'
interface inputShowProps {
    firstName : string,
    lastName: string,
    email: string,
    facebook: string,
    twitter: string
}
const Input = ({detail}:{detail: string})=>{
    return (
        <input className='text-black border border-black/50 py-2 w-full rounded-lg pl-3' placeholder={detail}/>
    );
}
const InputEdit = ({firstName, lastName, email, facebook, twitter}:inputShowProps) => {
  return (
    <section className='flex flex-col gap-6 text-black w-full'>
      <div className='flex flex-col sm:flex-row  justify-between gap-4'>
        <div className='flex flex-col gap-3 w-full'>
            <p className=''>First Name</p>
            <Input detail={firstName}/>
        </div>
        <div className='flex flex-col gap-3 w-full'>
            <p>Last Name</p>
            <Input detail={lastName}/>
        </div>
      </div>
      <div>
        <p>Email</p>
            <Input detail={email}/>
      </div>
      <div>
        <p>Facebook</p>
        <Input detail={facebook} />
      </div>
      <div>
        <p>X Handle</p>
        <Input detail={twitter}/>
      </div>
      <div className='flex justify-between'>
        <div></div>
        <button type='submit' className='text-white bg-secondary cursor-pointer px-8 py-3 rounded-2xl mt-6 text-right'>Save changes</button>
      </div>
      
    </section>
  )
}

export default InputEdit;
