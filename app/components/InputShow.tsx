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
        <p className='text-black border border-black/50 py-2 rounded-lg pl-3'>{detail}</p>
    );
}
const InputShow = ({firstName, lastName, email, facebook, twitter}:inputShowProps) => {
  return (
    <section className='flex flex-col gap-6 text-black/50 w-full'>
      <div className='flex flex-col sm:flex-row justify-between gap-4'>
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
    </section>
  )
}

export default InputShow
