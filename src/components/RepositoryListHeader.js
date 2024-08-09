import React from "react"
import { Menu, Button } from 'react-native-paper';
import { View, TextInput, Text } from "react-native";
import { FaMagnifyingGlass, FaXmark } from "react-icons-native/fa";
import { FaBook } from "react-icons-native/fa";
import { FaXing } from "react-icons-native/fa";

export class RepositoryListHeader extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            open: false
        }
    }
    renderHeader = () => {
        const props = this.props
        const closeMenu = () => this.setState({ open: false })
        const openMenu = () => this.setState({ open: true })

        return (<View
            style={{
                padding: 15,
                flexDirection: 'column',
                justifyContent: 'center',
            }}>
            <View>
                <TextInput
                    value={props.text}
                    onChangeText={props.setText}
                    placeholder="Search" />
            </View>
            <Menu
                visible={this.state.open}
                onDismiss={closeMenu}
                anchor={<Button mode="text" onPress={openMenu}>Select order...</Button>}>
                <Menu.Item onPress={() => { props.setOrder({ orderBy: 'CREATED_AT' }); closeMenu() }} title="Latest repositories" />
                <Menu.Item onPress={() => { props.setOrder({ ...props.order, orderBy: 'RATING_AVERAGE', orderDirection: 'DESC' }); closeMenu() }} title="Highest rated repositories" />
                <Menu.Item onPress={() => { props.setOrder({ ...props.order, orderBy: 'RATING_AVERAGE', orderDirection: 'ASC' }); closeMenu() }} title="Lowest rated repositories" />
            </Menu>
        </View>
        )
    }

    render() {
        return <>
            {this.renderHeader()}
        </>
    }
}