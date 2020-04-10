import React from "react";
import axios from "axios";


class PlayerCard extends React.Component  {
    constructor(){
        super();
        this.state = {
            players:[]
        }
    }
    componentDidMount(){
        axios.get("http://localhost:5000/api/players ")
        .then(response=>{
            console.log(response.data)
          this.setState({
              players:response.data

          })})
        }
        render(){
            return(
                <div>
                    {this.state.players.map(player=>( 
                    <div>
                    <h1>{player.name}</h1>
                    <p>{player.country}</p>
                    <p>{player.searches}</p>
                    </div>
                    ))
                    }

                </div>
            )

        }
    }
export default PlayerCard;