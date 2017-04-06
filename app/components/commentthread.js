import React from 'react';
import CommentEntry from './commententry';

export default class CommentThread extends React.Component {
	
  onPost(commentText) {
    this.props.onPost(commentText)
  }
	
  render() {
    return (
      <ul className="media-list">
        {React.Children.map(this.props.children, function(child) {
          return (
            <li className="media">
              {child}
            </li>
          )
        })}
        <li className="media">
          <CommentEntry onPost={(commentText) => this.onPost(commentText)} />
        </li>
      </ul>
    )
  }
}