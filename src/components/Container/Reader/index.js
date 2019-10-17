import React, { Component } from 'react'
import QrReader from 'react-qr-reader'
import { Grid } from '@material-ui/core'
 
class Reader extends Component {
    state = {
        result: 'Escaneando...'
    }
    
    handleScan = data => {
        if (data) {
            this.setState({
                result: data
            })
        }
    }
    handleError = err => {
        console.error(err)
    }
    render() {
        return (
        <div>
            <Grid container>
                <Grid item xs={12}>
                    <QrReader
                        delay={300}
                        onError={this.handleError}
                        onScan={this.handleScan}
                        style={{ width: '300px' }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <h1>{this.state.result}</h1>
                </Grid>
            </Grid>
            
            
        </div>
        )
    }
}

export default Reader;