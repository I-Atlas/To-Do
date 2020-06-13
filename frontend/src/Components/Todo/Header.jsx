import React from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography'

class Header extends React.Component {
    render () {
        return (
            <Card>
                <CardActionArea>
                    <CardContent>
                        <Typography variant="h4" component="h5">
                            <img className="card-module" src="https://imgur.com/XNfZS5N.png"/>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        )
    }
}

export default Header