import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";


const AuthRegister = () => {

  const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event);
    //  navigate("/");
  }
  return (
    <>
      <form onSubmit={handleSubmit} >
        <div className="mb-4">
          <div className="mb-2 block">
            <Label htmlFor="name" >Name</Label>
          </div>
          <Input
            id="name"
            type="text"
      
            required
            className="form-control form-rounded-xl"
          />
        </div>
        <div className="mb-4">
          <div className="mb-2 block">
            <Label htmlFor="emadd"  >Email Address</Label>
          </div>
          <Input
            id="emadd"
            type="email"
              
            required
            className="form-control form-rounded-xl"
          />
        </div>
        <div className="mb-6">
          <div className="mb-2 block">
            <Label htmlFor="userpwd" >Password</Label>
          </div>
          <Input
            id="userpwd"
            type="password"
           
            required
            className="form-control form-rounded-xl"
          />
        </div> 
        <Button color={'primary'} type="submit" className="w-full">Sign Up</Button> 
        
      </form>
    </>
  )
}

export default AuthRegister
