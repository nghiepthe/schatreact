import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import CommentsList from './CommentsList'
import CommentList from './CommentList'
// import MessagesList from '../ScreenChatSingle/MessagesList'
import ChatInput from '../ScreenChatSingle/ChatInput'

const Comments = () => {
    return (
        <View style = {{flex: 1}} >
            <Text>Comments</Text>
            {/* <CommentList/> */}
            {/* <ChatInput/>  */}
        </View>
    )
}

export default Comments

const styles = StyleSheet.create({})
