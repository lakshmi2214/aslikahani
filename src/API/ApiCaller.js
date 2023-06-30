const ApiCaller = ({url ="",method ="get"})=>{
    return new Promise((resolve,reject)=>{
        fetch(url,{method})
        .then((response)=>{
            return response.json()
        })

        .then((response)=>{
            resolve(response)
        })

        .catch((error)=>{
            reject(error)
        })
    })
}

export default ApiCaller;