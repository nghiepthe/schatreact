import { useAppDispatch, useAppSelector } from '@store';
import React from 'react';
import { Alert, FlatList, Text, TouchableOpacity, View } from 'react-native';
import { Avatar, FAB, List } from 'react-native-paper';
import { Tabs, TabScreen } from 'react-native-paper-tabs';

const state = ['Tôi giao', 'Được giao'];

const Task: React.FC = () => {
  return (
    <View>
      <Tabs style={{ backgroundColor: '#fff' }} uppercase={false}>
        {state.map((state, index) => (
          <TabScreen label={state} key={index}>
            {/* <TaskRole navigation={navigation} role={state} /> */}
          </TabScreen>
        ))}
      </Tabs>
      <FAB
        icon={'plus'}
        style={{ position: 'absolute', margin: 16, right: 0, bottom: 0 }}
      // onPress={() => navigation.navigate('TaskCreate')}
      />
    </View>
  );
};

const stateList = ['Đã giao', 'Đã nhận', 'Hoàn tất', 'Quá hạn'];
export function TaskRole({ navigation, role }) {
  return (
    <Tabs style={{ backgroundColor: '#fff' }} uppercase={false}>
      {stateList.map((state, index) => (
        <TabScreen label={state} key={index}>
          <TaskState state={index} navigation={navigation} role={role} />
        </TabScreen>
      ))}
    </Tabs>
  )
}

const trailingColor = ['#008A00', '#008A00', '#008A00', '#E51400'];
const trailingIcon = [
  'check-bold',
  'circle-slice-3',
  'check-circle',
  'alert-circle',
];

export const TaskState = ({ navigation, state, role }) => {
  // const idUser = useAppSelector(selectUserId)
  const data = [{ id: "", state: "", role: "", idUser: "" }]

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <TaskRenderItem
          item={item}
          navigation={navigation}
          icon={trailingIcon[state]}
          color={trailingColor[state]}
          state={state}
          role={role}
        />
      )}
      keyExtractor={(item, index) => `${item.id}`}
      initialNumToRender={10}
      refreshing={false}
      onRefresh={() => { }}
    />
  );
};

class ClassTaskRenderItem extends React.PureComponent<any> {
  render() {
    const { dispatch } = this.props;
    const {
      icon,
      color,
      navigation,
      role,
      state,
      item: { id, title, description, Assigner, Assignee },
    } = this.props;
    return (
      <List.Item
        title={title}
        description={description}
        left={props => (
          // <Avatar.Image source={Images.AuthWelcome.LOGO_CHAT} {...props} />
          <TaskRenderAvatar data={role === "Được giao" ? Assigner : Assignee} size={50} />
        )}
        right={props => {
          if (role === "Được giao") {
            return (
              <TouchableOpacity
                onPress={() => {
                  if (state === 3) {
                    console.log("hoàn thành trể hạn");
                  }
                  else {
                    if (state !== 2) {
                      // dispatch(onAcc({ id: id, ongoingState: state + 1 }))
                    }
                    else {
                      Alert.alert("Đã hoàn thành")
                    }
                  }
                }
                }
              >
                <List.Icon {...props} icon={icon} color={color} />
              </TouchableOpacity>)
          }
          else
            return (<></>)
        }
        }
      // onPress={() => navigation.navigate('DetailedTask', { taskID: id })}
      />
    );
  }
}

export function TaskRenderItem(props) {
  const dispatch = useAppDispatch();
  return (<ClassTaskRenderItem dispatch={dispatch} {...props} />)
}

function CallImageAPI(data) {
  switch (data) {
    case "000":
      return require('../assets/img/logo.jpg');
    case "001":
      return require('../assets/img/logo.jpg')
    case "002":
      return require('../assets/img/logo.jpg')
    case "003":
      return require('../assets/img/logo.jpg')
    case "004":
      return require('../assets/img/logo.jpg')
    case "005":
      return require('../assets/img/logo.jpg')
    case "006":
      return require('../assets/img/logo.jpg')
  }
}

function TaskAvatar({ data, size }) {
  //console.log(data);
  const src = Array.isArray(data) ? data[0] : data;
  return (
    <View style={{}}>
      <Avatar.Image source={CallImageAPI(src)} size={size} />
    </View>
  )
}

function TaskAvatar2({ data, size }) {
  return (
    <View style={{ width: size, height: size, flexDirection: "row" }}>
      <View style={{ backgroundColor: "#E51400", width: size * 0.65, height: size * 0.65, borderRadius: 100, marginTop: size * 0.35, position: 'absolute' }}>
        <Avatar.Image source={CallImageAPI(data[0])} size={size * 0.65} />
      </View>
      <View style={{ backgroundColor: "#008A00", width: size * 0.65, height: size * 0.65, borderRadius: 100, marginLeft: size * 0.35 }}>
        <Avatar.Image source={CallImageAPI(data[1])} size={size * 0.65} />
      </View>
    </View>
  )
}

function TaskAvatar3({ data, size }) {
  return (
    <View style={{ width: size, height: size, flexDirection: "row" }}>
      <View style={{ backgroundColor: "#E51400", width: size * 0.6, height: size * 0.6, borderRadius: 100, marginLeft: size * 0.25, position: 'absolute' }}>
        <Avatar.Image source={CallImageAPI(data[0])} size={size * 0.6} />
      </View>
      <View style={{ backgroundColor: "#008A00", width: size * 0.6, height: size * 0.6, borderRadius: 100, position: 'absolute', marginTop: size * 0.4 }}>
        <Avatar.Image source={CallImageAPI(data[1])} size={size * 0.6} />
      </View>
      <View style={{ backgroundColor: "#FA6800", width: size * 0.6, height: size * 0.6, borderRadius: 100, position: 'absolute', marginTop: size * 0.4, marginLeft: size * 0.4 }}>
        <Avatar.Image source={CallImageAPI(data[2])} size={size * 0.6} />
      </View>
    </View>
  )
}

function TaskAvatar4({ data, size }) {
  return (
    <View style={{ width: size, height: size, flexDirection: "row" }}>
      <View style={{ backgroundColor: "#E51400", width: size * 0.6, height: size * 0.6, borderRadius: 100, position: 'absolute' }}>
        <Avatar.Image source={CallImageAPI(data[0])} size={size * 0.6} />
      </View>
      <View style={{ backgroundColor: "#AA00FF", width: size * 0.6, height: size * 0.6, borderRadius: 100, position: 'absolute', marginLeft: size * 0.4 }}>
        <Avatar.Image source={CallImageAPI(data[1])} size={size * 0.6} />
      </View>
      <View style={{ backgroundColor: "#008A00", width: size * 0.6, height: size * 0.6, borderRadius: 100, position: 'absolute', marginTop: size * 0.4 }}>
        <Avatar.Image source={CallImageAPI(data[2])} size={size * 0.6} />
      </View>
      <View style={{ backgroundColor: "#FA6800", width: size * 0.6, height: size * 0.6, borderRadius: 100, position: 'absolute', marginTop: size * 0.4, marginLeft: size * 0.4 }}>
        <Avatar.Image source={CallImageAPI(data[3])} size={size * 0.6} />
      </View>
    </View>
  )
}

function TaskAvatar5({ data, size }) {
  return (
    <View style={{ width: size, height: size, flexDirection: "row" }}>
      <View style={{ backgroundColor: "#E51400", width: size * 0.6, height: size * 0.6, borderRadius: 100, position: 'absolute' }}>
        <Avatar.Image source={CallImageAPI(data[0])} size={size * 0.6} />
      </View>
      <View style={{ backgroundColor: "#AA00FF", width: size * 0.6, height: size * 0.6, borderRadius: 100, position: 'absolute', marginLeft: size * 0.4 }}>
        <Avatar.Image source={CallImageAPI(data[1])} size={size * 0.6} />
      </View>
      <View style={{ backgroundColor: "#008A00", width: size * 0.6, height: size * 0.6, borderRadius: 100, position: 'absolute', marginTop: size * 0.4 }}>
        <Avatar.Image source={CallImageAPI(data[2])} size={size * 0.6} />
      </View>
      <View style={{ backgroundColor: "#FA6800", width: size * 0.6, height: size * 0.6, borderRadius: 100, position: 'absolute', marginTop: size * 0.4, marginLeft: size * 0.4, alignItems: "center", justifyContent: "center" }}>
        <Text>{data.length - 3}</Text>
      </View>
    </View>
  )
}

export function TaskRenderAvatar({ data, size }) {
  const length = Array.isArray(data) ? data.length : 1;
  //data = [Images.Avatar.AVATARF, Images.Avatar.AVATARE,Images.Avatar.AVATARC]
  //console.log(data);

  switch (length) {
    case 1:
      return (
        <TaskAvatar data={data} size={size}></TaskAvatar>
      )
    case 2:
      return (
        <TaskAvatar2 data={data} size={size}></TaskAvatar2>
      )
    case 3:
      return (
        <TaskAvatar3 data={data} size={size}></TaskAvatar3>
      )
    case 4:
      return (
        <TaskAvatar4 data={data} size={size}></TaskAvatar4>
      )
    default:
      return (
        <TaskAvatar5 data={data} size={size}></TaskAvatar5>
      )
  }
}