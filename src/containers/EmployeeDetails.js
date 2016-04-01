import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class EmployeeDetails extends Component {
    static propTypes = {
        id: PropTypes.string.isRequired
    };

    render() {
        return (
            <div>
                employee {this.props.id}
            </div>
        )
    }
}

export default connect(state => {
    const { employees, projects } = state
    return { employees, projects }
})(EmployeeDetails)