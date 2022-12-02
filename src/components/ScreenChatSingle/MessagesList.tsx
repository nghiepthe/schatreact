import React, { useState, useCallback, useEffect } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Animated,
  LogBox,
  SafeAreaView,
} from "react-native";
import { GiftedChat, Send } from "react-native-gifted-chat";
import EmojiSelector, { Categories } from "react-native-emoji-selector";
import { Ionicons, Entypo } from "@expo/vector-icons";
// import * as ImagePicker from "expo-image-picker";

// import { useDispatch, useSelector } from "react-redux";
// import { ListenChat, ListenNewMess } from "../../store/actions/socket.action";

const MessagesList = (props) => {
  // const { id } = useSelector((state) => state.userReducer);
  // const { socket,isListenChat,isListenNewMess } = useSelector((state) => state.socketReducer);
  const [messages, setMessages] = useState([]);
  let length = 0;
  let idRoom = 0;
  // const dispatch = useDispatch();
  
  const [emoji, setEmoji] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [heightValue, setHeightValue] = useState(new Animated.Value(70));
  const [image, setImage] = useState(null);

  useEffect(() => {
    showEmojis();
  }, [showEmojiPicker]);

  const showEmojis = () => {
    Animated.timing(heightValue, {
      toValue: showEmojiPicker ? 300 : 30,
      duration: 0,
      useNativeDriver: false,
    }).start();
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       if(isListenChat){
  //         console.log("Off")
  //         dispatch(ListenChat(false))
  //         socket.off("showAllChatOnRoom")
  //       }
  //       socket.on("showAllChatOnRoom", (data) => {
  //         console.log("/////////////////////////////////////////");
  //         console.log(data.length)
  //         if(data.length > 0){          
  //           console.log("exist data")
  //           length = data.length
  //           idRoom = data[0].chat_room
  //         }
  //         data.forEach((item) => {          
  //           const temp = {
  //             _id: item._id,
  //             text: item.message_content,
  //             createdAt: item.message_time,
  //             user: {
  //               _id: item.user._id,
  //               name: item.user.user_name,
  //               avatar: item.user.avatar,
  //           }           
  //           }
  //           addMessage(temp)
  //           });
  //         dispatch(ListenChat(true))
  //       });

  //       if(isListenNewMess){
  //         dispatch(ListenNewMess(false))
  //         socket.off("messageClient")
  //       }
  //       socket.on("messageClient", (message) => {
  //         idRoom = message.chat_room._id
  //         length++
  //         const temp = {
  //           _id: message._id,
  //           text: message.message_content,
  //           createdAt: message.message_time,
  //           user: {
  //             _id: message.user._id,
  //             name: message.user.user_name,
  //             avatar: message.user.avatar,
  //         }
  //       }
  //         addMessage(temp)
  //         dispatch(ListenNewMess(true))
  //       });
  //       //type 1: room || type 2: user
  //       if(props.value.type == 1){
  //         console.log("room")
  //         socket.emit("joinRoom", props.value.id);
  //       }
  //       else {
  //         console.log("user")
  //         socket.emit("singleRoom", props.value.id);
  //       }
        
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  // const addMessage = (newMessage) => setMessages(state => [...state, newMessage])
  const onSend = useCallback((message = []) => {
    // if(length==0){
    //   const newMes = {
    //     another_user_id: props.value.id,
    //     chat_message : {
    //       message_type:	2,
    //       message_content:	message[0].text,
    //       message_time:	message[0].createdAt,
    //       chat_room_id:	false,
    //     }      
    //   }
    //   socket.emit("chatSingle", newMes);
    // }
    // else{
    //   const newMes = {
    //     message_type:	2,
    //     message_content:	message[0].text,
    //     message_time:	message[0].createdAt,
    //     chat_room_id:	idRoom,
    //   }
    //   console.log(newMes)
    //   socket.emit("sendMessage", newMes);
    // }

  }, []);

  //style send btn
  function renderSend(props) {
    return (
      <Send {...props}>
        <View style={styles.btnSend}>
          <Ionicons name="send-sharp" size={25} color="black" />
        </View>
      </Send>
    );
  }

  // chon image de gui
  const pickImage = async () => {
    // let result = await ImagePicker.launchImageLibraryAsync({
    //   mediaTypes: ImagePicker.MediaTypeOptions.All,
    //   aspect: [4, 3],
    //   quality: 1,
    // });

    // console.log("Image:", result);

    // if (!result.cancelled) {
    //   setImage(result.uri);
    // }
  };

  LogBox.ignoreLogs([
    "AsyncStorage has been extracted from react-native core and will be removed in a future release. ",
  ]);
  return (
    <View style={styles.container}>
      <View style={styles.giftedChat}>
        <GiftedChat
          messages={messages}
          inverted = {false}
          renderAvatarOnTop={true}
          onSend={(messages) => {
            onSend(messages), setEmoji("");
          }}
          // user={{
          //   _id: id,
          // }}
          placeholder="Nhập tin nhắn của bạn..."
          renderSend={renderSend}
          text={emoji}
          onInputTextChanged={(text) => setEmoji(text)}
          bottomOffset={33}
        />
      </View>
      <Animated.View style={[{ height: heightValue }, styles.buttonContainer]}>
        <View style={styles.innerContainer}>
          <View style={styles.leftContainer}>
            <TouchableOpacity onPress={pickImage}>
              <Ionicons name="image-outline" size={19} color="#292929" />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setShowEmojiPicker((value) => !value)}
            >
              <Entypo
                name={showEmojiPicker ? "cross" : "emoji-happy"}
                size={18}
                color="#292929"
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Entypo name="attachment" size={18} color="#292929" />
            </TouchableOpacity>

            <TouchableOpacity>
              <Ionicons name="options-outline" size={20} color="#292929" />
            </TouchableOpacity>

            <TouchableOpacity>
              <Ionicons name="mic-outline" size={20} color="black" />
            </TouchableOpacity>
          </View>

          <View style={styles.rightContainer}>
            <TouchableOpacity>
              <Ionicons
                name="ellipsis-horizontal-sharp"
                size={24}
                color="black"
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.emojiContainer}>
          <EmojiSelector
            onEmojiSelected={(curentEmoji) => {
              setEmoji(emoji + curentEmoji);
            }}
            showSearchBar={false}
            showTabs={true}
            showHistory={true}
            showSectionTitles={true}
            // columns="9"
            category={Categories.all}
          />
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  giftedChat: {
    flex: 1,
  },
  btnSend: {
    justifyContent: "center",
    height: "100%",
    marginRight: 10,
  },
  buttonContainer: {
    width: "100%",
    backgroundColor: "white",
  },
  innerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  leftContainer: {
    marginLeft: 12,
    width: "40%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rightContainer: {
    marginRight: 12,
  },
  emojiContainer: {
    width: "100%",
    height: "100%",
  },
});

export default MessagesList;
