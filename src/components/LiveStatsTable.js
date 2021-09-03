import StatsTable from "./StatsTable";

const LiveStatsTable = ({serverStats}) => {


    return <StatsTable dataSource={serverStats} />;
}

export default LiveStatsTable;