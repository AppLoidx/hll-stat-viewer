import './App.css';
import Tracker from "./components/Tracker";
import Search from "antd/es/input/Search";
import {useEffect, useState} from "react";
import {AutoComplete, Col, Menu, Row, Select, Space} from "antd";
import {Option} from "antd/es/mentions";
import {servers} from "./consts/servers";
import LiveStatsTable from "./components/LiveStatsTable";
import liveStatsLoader from "./scripts/liveStatsLoader";

function App() {
    const [trackerName, setTrackerName] = useState("");
    const [serverId, setServerId] = useState(0);
    const [serverStats, setServerStats] = useState([]);

    const [menuState, setMenuState] = useState("tracker");

    const [updateInterval, setUpdateInterval] = useState(null);



    useEffect(() => {
        if (updateInterval !== null) {
            clearInterval(updateInterval);
        }
        let newUpdateInterval = setInterval(() => {
            liveStatsLoader(serverId)
                .then(d => {
                    setServerStats(d.result.stats);
                });
        }, 5000);

        setUpdateInterval(newUpdateInterval);

        liveStatsLoader(serverId)
            .then(d => {
                setServerStats(d.result.stats);
            });

    }, [serverId]);


    const [searchOptions, setSearchOptions] = useState([]);
    const [searchVal, setSearchVal] = useState("");

    useEffect(() => {
        setSearchOptions(serverStats.filter(p => p.player.startsWith(searchVal)).map(p => {return {value: p.player}}));
    }, [searchVal, serverStats])

    const onSearch = (value) => {
        setTrackerName(value);
        setSearchVal("");
    }

    return (
        <div>
            <Menu mode="horizontal" selectedKeys={[menuState]} onSelect={e => setMenuState(e.key)}>
                <Menu.Item key="tracker">
                    Трекер
                </Menu.Item>
                <Menu.Item key="stats">
                    Общая статистика
                </Menu.Item>

                <Menu.Item key="serverChoose" disabled style={{marginLeft: "auto"}}>
                    <Select style={{width: "200px"}} onSelect={setServerId} defaultValue={serverId}>
                        {servers.map(server => <Option value={server.id}>{server.serverName}</Option>)}
                    </Select>
                </Menu.Item>
            </Menu>

            <Row style={{marginTop: "40px"}}>
                <Col span={20} offset={2}>
                    {
                        menuState === "tracker" && <Space direction="vertical" style={{width: "100%"}}>
                            <AutoComplete options={searchOptions} placeholder="Nickname" onSearch={setSearchVal} onChange={onSearch} style={{width: 400}}/>
                            <Tracker player={trackerName} serverStats={serverStats}/>
                        </Space>
                    }
                    {
                        menuState === "stats" && <LiveStatsTable serverStats={serverStats}/>
                    }


                </Col>
            </Row>
        </div>


    );
}

export default App;
