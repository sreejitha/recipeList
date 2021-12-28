import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: [],
            DataisLoaded: false
        };
    }

    componentDidMount() {
        console.log('inside componentDidMount')
        fetch("https://api.spoonacular.com/recipes/findByIngredients?apiKey=72e8bd448e064513a19164fa7e0b5e61&ingredients=olives&number=6")
            .then((resp) => resp.json())
            .then((json) => {
                this.setState({
                    recipes: json,
                    DataisLoaded: true
                });
            })
    }

    render() {
        console.log('inside render')
        const { recipes, DataisLoaded } = this.state;
        if (DataisLoaded) {
            return (<div style={{}}>
              <Grid container direction="row">
              {recipes.map(r => (
        <Card style={{
            display:"flex",
            width: 400,
            height:300,
            backgroundColor: "pink",
            justifyContent: "center",
            alignItems: "center",
            margin: "10px"
          }}>
            <CardContent display="flex" justifyContent="center">
                <Typography variant="h5" component="h2" align="center" justify="center">
                    {r.title}
                </Typography>
            </CardContent>
        </Card>
        ))
        }
         </Grid>
         </div>);
        } else {
            return null;
        }

    }
}

export default App;