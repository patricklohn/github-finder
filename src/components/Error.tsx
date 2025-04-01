type PropsError = {
    typeError: string
}

const Error = ({typeError}:PropsError) => {
  return (
    <div>
        <h1>Error</h1>
        <span>{typeError}</span>
    </div>
  )
}


export default Error
