import React, {Component} from "react";
import {connect} from "react-redux";
import { fetchPostsAndUsers } from "../actions"
import UserHeader from "./UserHeader";


class PostList extends Component {

    componentDidMount() {

        this.props.fetchPostsAndUsers();

    }

    renderPosts() {
        return this.props.posts.map((post) => {

            return (

                <div className="item" key={post.id}>

                    <i className="big middle aligned icon user"/>
                    <div className="content">

                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                        <UserHeader userId={post.userId}/>
                    </div>
                    
                </div>
            );

        })
    }


    render () {

        return (

            <div className="ui relaxed divided list">
                {this.renderPosts()}
            </div>

        );
    }


}

const mapStateToProps = (state) => {

    return {
        posts: state.posts,
    }
}


export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList); // since we dont need any state in this component, we didnt have mapStateToProps, just write 'null'