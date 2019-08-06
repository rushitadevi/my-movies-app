import React,{Component} from 'react'
import {Form,FormGroup,Label,Button,Input,ListGroup,ListGroupItem,Badge} from "reactstrap";

class AddComments extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          newcomment: {
            comment: "",
            rate: 1,
            elementId: 0,
          },
          comments:[],
          
          errorMessage: ""
        };
      }

      componentDidUpdate = async () => {
        
        try {
            let username = 'user8';
            let password = 'eAqd2ZPk3Rbtm8Mw';
            let url = "https://strive-school-testing-apis.herokuapp.com/api/comments/";
            let authString = `${username}:${password}`

            let headers = new Headers({
                "Content-Type": "application/json",
            });
            headers.set('Authorization', 'Basic ' + btoa(authString))
            this.state.id = this.props.IMDBID;
            var response = await fetch(url + this.state.id, { headers: headers });
            var jSon = await response.json();
            
            if (jSon.length > 0) {
                 this.setState({
                    comments: jSon
                });
            }
            else {
                this.setState({
                    comments: [],
                });
            }
        }
        catch{
        }
    }

    submitComment = async e =>{
        e.preventDefault();
   
        try{
           let username = 'user8';
           let password = 'eAqd2ZPk3Rbtm8Mw';
           let url = "https://strive-school-testing-apis.herokuapp.com/api/comments/";
           let authString = `${username}:${password}`
           
           let headers = new Headers({
               "Content-Type": "application/json",
           });
           headers.set('Authorization', 'Basic ' + btoa(authString))
           console.log(document.querySelector("#elementId").innerText)
            this.state.newcomment.elementId=(document.querySelector("#elementId").innerText);
            console.log(this.state.newcomment.elementId);
               var response=await fetch(url, {
                   method: "POST",
                   body: JSON.stringify(this.state.newcomment),
                   headers: headers
                 });
   
                 if(response.ok)
                 {
                   var json = await response.json();
                   this.setState({comments:json});
                   
                 }
        }      
       catch(ex)
        {
            this.setState({errorMessage:ex.message});
        }
       }
   
       updateComment = input => {
           var comment=this.state.newcomment; //we are taking one object here        
           var currentId=input.currentTarget.id; //this is when we type smthng in textbox or any input        
           if(currentId==="rate" && input.currentTarget.value.length>0)
           {
               debugger;
               console.log(input.currentTarget.value);
               comment[currentId]=parseInt(input.currentTarget.value) ;    
           }
           else if(currentId==="elementId")
           {
               comment[currentId]= input.currentTarget.value;
           }
           else
           {
               comment[currentId]=input.currentTarget.value;
           }
           this.setState({newcomment:comment});
           console.log(this.state.newcomment);
       }

       deleteComment =e =>{
           var commentId=e.currentTarget.value;
           
       }

       render(){
        console.log(this.state.comments);
           return(
               <>
               <h3>Add Comments</h3>
               <Form style={{width : "100%"}}>
               <FormGroup>
                   <Label for="comment">Add Comments</Label>
                   <Input type="textarea" name="comment" id="comment" value={this.state.newcomment.comment}
                     onChange={this.updateComment} placeholder="comment" />
               </FormGroup>
               <FormGroup>
                   <Label for="rate">rate</Label>
                   <Input type="number" name="rate" id="rate" 
                   value={this.state.newcomment.rate}
                   onChange={this.updateComment} placeholder="give rating"   />
               </FormGroup>
               <FormGroup>
                   <Label for="elementId"   id="elementId" >{this.props.IMDBID} 
                   </Label>
               </FormGroup>
               <Button onClick={this.submitComment}>Submit</Button>
           </Form>

           {this.state.comments.length > 0 &&
                this.state.comments.map((c,index) => (
                    <ListGroup className="mt-4" key={index} style={{ width: "100%" }}>
                    <ListGroupItem  className="justify-content-between" color="success"><b>{c.comment}</b>
                    <Badge pill color="success">{c.rate}</Badge>
                    <Button color="danger"  style={{float : "right"}} value={c._id} onClick={this.deleteComment} >Delete</Button>
                    </ListGroupItem>
                </ListGroup>
                ))}
             {this.state.comments.length === 0 && <div> <Badge color="light" pill>No Comments for this book</Badge></div>}
           </>
           );
       }
}
 
export default AddComments;