import React from "react";
import { connect } from "react-redux";
import { getAnnouncements } from "../../redux/announcement-reducer";
import Loader from "../common/Loader/Loader";
import { Announcement } from "./Announcement";

class AnnouncementContainer extends React.Component {
    componentDidMount() {
        this.props.getAnnouncements();
    }
    
    render() {
        console.log('isFetching: ', this.props.isFetching);
        return (
            <>
                {
                    this.props.isFetching ? <Loader />
                    : <Announcement
                       announcements={ this.props.announcements }
                    />
                }
            </>
        )
    }
    
}

const mapStateToProps = state => ({
    isFetching: state.announcements.isFetching,
    announcements: state.announcements.data
});

const mapDispatchToProps = {
    getAnnouncements: getAnnouncements
}

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementContainer)