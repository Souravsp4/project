const Registration = () => {
    return(
        <div className="container mt-4 mt-4 ml-4 mr-4 pl-4 pr-4" >
        <form>
            <div class="mb-3">
                <label for="registrationFirstName" className="form-label">First Name </label>
                <input type="text" className="form-control" id="registrationFirstName" />
            </div>
            <div class="mb-3">
                <label for="registrationlastName" className="form-label">Last Name </label>
                <input type="text" className="form-control" id="registrationlastName" />
            </div>
            <div class="mb-3">
                <label for="registrationEmail" class="form-label">Email Address </label>
                <input type="email" class="form-control" id="registrationEmail" aria-describedby="emailHelp"/>
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="registrationPassword" class="form-label">Password </label>
                <input type="password" class="form-control" id="registrationPassword"/>
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        </div>
    )
}

export default Registration