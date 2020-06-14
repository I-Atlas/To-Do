import React from 'react'
import { Card, CardActionArea, CardContent, Typography} from '@material-ui/core'

class Header extends React.Component {
    render () {
        return (
            <Card>
                <CardActionArea>
                    <CardContent>
                        <Typography variant="h4" component="h5">
                            <img className="card-module" src="https://imgur.com/XNfZS5N.png" alt="To-Do List"/>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        )
    }
}

export default Header