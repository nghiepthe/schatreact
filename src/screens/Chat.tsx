import React, { useState, useEffect, useCallback } from "react";
import {
  ImageBackground,
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { index } from "../themes/ListChat/index";
// import DocumentPicker, { types } from "react-native-document-picker";
// import ChatScreen from "../ScreenChatSingle/ChatScreen";
import io from "socket.io-client";

import { useDispatch, useSelector } from "react-redux";
// import { LoadSocket, ListenFindUser } from "../../store/actions/socket.action";

const Chat: React.FC = () => {
  // const { accessToken, id} = useSelector((state) => state.userReducer);
  // const { socket, isListenFindUser } = useSelector((state) => state.socketReducer);
  // const { rooms } = useSelector((state) => state.socketReducer);
  // const dispatch = useDispatch();

  // async function chooseFile() {
  //   try {
  //     const response = await DocumentPicker.pick({
  //       presentationStyle: "fullScreen",
  //       type: [types.pdf],
  //       allowMultiSelection: true,
  //     });
  //   } catch (err) {
  //     if (DocumentPicker.isCancel(err)) {
  //       console.log(
  //         "User cancelled the picker, exit any dialogs or menus and move on"
  //       );
  //     } else {
  //       throw err;
  //     }
  //   }
  // }

  const [dataRooms, setDataRooms] = useState([]);
  const [isBusy, setIsBusy] = useState(true)

  // const addRoom = (newRoom) => setDataRooms(state => [...state, newRoom])
  // try {
  //   if(socket==null)
  //   {
  //     console.log("///Listchat")
  //     console.log("null")
  //     const socket1 = io("http://localhost:5000/chat", {
  //       extraHeaders: {
  //         Authorization: "Bearer " + accessToken,
  //       },
  //     });    
  //     // dispatch(LoadSocket(socket1))
  //     socket1.on("chatRooms", (rooms) => {
  //       console.log(rooms);
  //       setDataRooms([])
  //       // setDataRooms(rooms);
  //       try{
  //         rooms.forEach((item) => {   
  //           if(item.single_room){
  //             item.participants.forEach((user) => {   
  //               if(user._id != id){
  //                 const temp = {
  //                   _id: item._id,
  //                   chat_room_image: user.avatar,
  //                   chat_room_name: user.user_name,
  //                   type: 1 //room
  //                 }         
  //                 addRoom(temp)
  //               }
  //             });
  //           }
  //         });
  //         console.log("///success")  
  //       }catch(error){
  //         console.log(error)
  //       }     
  //     });
  //     setIsBusy(false)
  //   }   
  // if(socket && isBusy) {    
  //   console.log("///Listchat")
  //   console.log("exist") 
  //   socket.emit("getListRoomForUser", id )
  //   setIsBusy(false)
  // }             
  // } catch (error) {
  //   console.log("Fail to fetch room list", error);
  // }

  // all Event:
// join room and get all message: Event name: joinRoom -> Listener: showAllChatOnRoom
// connection, get all room -> Listener: chatRooms

  const [Friend, SetFriend] = useState(dataRooms);
  const [RenderView, setRenderView] = useState(false);
  const [IdFriend, setIdFriend] = useState(0);
  const [Notification, setNotification] = useState(true);
  const [Search, setSearch] = useState("");
  const [SearchFriend, SetSearchFriend] = useState(Friend);
  const [messages, setMessages] = useState([]);


  const renderNotification = () => {
    if (Notification) return <View style={index.NodeNotificatio}></View>;
    else {
      return <></>;
    }
  };

  // const filterSearch = (text) => {
  //   setSearch(text);
  //   if(text){
  //     if(isListenFindUser){
  //       dispatch(ListenFindUser(false))
  //       socket.off("getUserByPhone")
  //     }
  //     socket.on("getUserByPhone", (users) => {
  //       console.log("\\\\\\\\\\\\\"")
  //       console.log(typeof users)
        
  //       setDataRooms([])
  //       console.log(dataRooms)
  //       if(typeof users !="string")
  //       {
  //         const temp = {
  //           _id: users._id,
  //           chat_room_image: users.avatar,
  //           chat_room_name: users.user_name,
  //           type: 2, //user
  //         }
  //       addRoom(temp)
  //       }      
  //       dispatch(ListenFindUser(true))
  //     })
  //     let number = ''
  //     if(text.indexOf("0") == 0){
  //       number = '+84' +  text.slice(1, text.length)
  //     }
      
  //     socket.emit("searchUserByPhone", number)
  //   }
  //   else{
  //     socket.emit("getListRoomForUser", id )
  //   }
  // };

  const renderHeader = () => {
    return (
      <View style={index.Header}>
        <ImageBackground
          source={require("../assets/images/ListChat/MaskGroup.png")}
          style={index.ImageBackground}
        >
          <View style={index.BoxTop}>
            <TouchableOpacity onPress={() => {}
              // navigation.navigate("MenuScreen")
            }>
              <View style={index.BoxAvatar}>
                <Image
                  source={require("../assets/images/ListChat/avatar.png")}
                  style={index.avatar}
                />
              </View>
            </TouchableOpacity>

            <View style={index.BoxSearch}>
              <TextInput
                placeholder="Tìm kiếm bạn bè, nhóm"
                style={index.search}
                selectionColor={"#1E73B9"}
                value={Search}
                // onChangeText={(text) => filterSearch(text)}
              ></TextInput>
            </View>
            <View style={index.BoxAdd}>
              <TouchableOpacity
                // onPress={() => navigation.navigate("HomeScreen")}
              >
                <Image
                  source={require("../assets/images/ListChat/IconNews.png")}
                  style={index.IconNews}
                />
              </TouchableOpacity>

              <TouchableOpacity>
                <View>
                  <Image
                    source={require("../assets/images/ListChat/IconNotification.png")}
                    style={index.IconNotification}
                  />
                  {renderNotification()}
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  };

  const renderContent = () => {
    return (
      <View style={index.Content}>
        <View>
          <View style={index.PhoneBook}>
            <View>
              <View style={index.BoxPhoneBook}>
                
                 <TouchableOpacity
                onPress={() => (console.log(dataRooms))}
              >
                <Image
                  source={require("../assets/images/ListChat/Phonebook.png")}
                  style={index.IconPhoneBook}
                />
              </TouchableOpacity>
              </View>
    
            </View>
            <View>
              <Text>Danh bạ</Text>
            </View>
          </View>
        </View>
        <View style={index.MenuBody}>
          <Text>Tất cả tin nhắn</Text>
          <Image
            source={require("../assets/images/ListChat/list.png")}
            style={index.iconList}
          />
          <Text>Chưa đọc</Text>
        </View>

        <View style={index.listFriend}>
          {(dataRooms!==null) 
          ?<FlatList
            data={dataRooms}
            // keyExtractor={(item) => item._id}
            renderItem={({ item }) => renderItem(item)}
          /> 
          : <Text>Không có dữ liệu</Text>}
        </View>
      </View>
    );
  };

  

  // const renderChatScreen = () => {
  //   return <ChatScreen />;
  // };

  const renderFriend = () => {
    return (
      <View style={index.container}>
        {/* {renderHeaderFriend()}
                {renderContentFriend()}
                {renderFooterFriend()} */}
        {/* {renderChatScreen()} */}
      </View>
    );
  };


  const UnreadMessage = (item) => {
    if (item.UnreadMessage > 0) {
      return (
        <View style={index.Node}>
          <Text style={index.NumberNode}>{item.UnreadMessage}</Text>
        </View>
      );
    } else {
      return <></>;
    }
  };

  const Silent = (item) => {
    if (item.silent == true) {
      return (
        <Image
          source={require("../assets/images/ListChat/Silent.png")}
          style={index.IconSilent}
        />
      );
    } else {
      return <></>;
    }
  };

  //new
  const renderAvatar = (url) => {
    if (typeof url === 'string') {
      return (
        <Image
          source={{ uri: url }}
          style={index.IconAvatar}
        />
      )
    } else if (typeof url === 'number') {
      return (
        <Image
          source={url}
          style={index.IconAvatar}
        />
      )
    }
  }
  ///// các room trong list chat
  const renderItem = (item) => {
    const value = {
        id : item._id,
        avt: item.chat_room_image,
        name: item.chat_room_name,
        type: item.type
    }
    return (
      <TouchableOpacity onPress={() => {}
                    // navigation.navigate(
                    //     'ChatScreen',
                    //     value
                    // )
      }>
        <View style={index.ListBoxChat}>
          <View>
            {renderAvatar(item.chat_room_image)}
          </View>
          <View>
            <Text>{item.chat_room_name}</Text>
          </View>
          <View style={index.TextTime}>
            <View style={index.BoxTime}>
              <View>{UnreadMessage(item)}</View>
              <View style={index.BoxTextTime}>
                <View style={index.TimeChat}>
                  <Text>1 giờ</Text>
                </View>
                <View style={index.BoxSilent}>{Silent(item)}</View>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const render = () => {
    if (RenderView == false) {
      return (
        <View style={index.container}>
          {/* {renderHeader()} */}
          {renderContent()}
        </View>
      );
    } else {
      if (RenderView == true) {
        return renderFriend();
      }
    }
  };
  return render();
};

export default Chat;
