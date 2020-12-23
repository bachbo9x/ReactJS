import React from 'react'

// Tạo Login cho Header
export default class Login extends React.Component {
    render() {
        // Trả về đoạn mã html
        return (
            <div className="w3l_sign_in_register">
                <ul>
                    {/* telephone */}
                    <li><i className="fa fa-phone" aria-hidden="true"></i> (+000) 123 345 653</li>
                    {/* login */}
                    <li><a href="#" data-toggle="modal" data-target="#myModal">Login</a></li>
                </ul>
            </div>
        )
    }
}