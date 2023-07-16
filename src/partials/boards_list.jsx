import React, { useEffect } from 'react';
import { layoutTypeObj } from '../constants';
import { useSelector, useDispatch } from 'react-redux';
import OuterLayout from '../components/outer_layout';
import { fetchBoardsList } from '../store/actions/actions';

const BoardsList = () => {
    const data = useSelector(state => state.boards.boardsList);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchBoardsList());
    }, []);

    return (
        <div className='main_section'>
            <OuterLayout title={"Boards List"} list={data || []} layoutType={layoutTypeObj.BOARD} />
        </div>
    );
};

export default BoardsList;
