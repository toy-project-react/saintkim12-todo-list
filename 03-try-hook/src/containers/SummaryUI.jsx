import React, { useContext } from 'react'
// import dataReducer from 'reducers/TodolistData'
import Context from 'contexts/TodolistDataContext'
import { format } from 'date-fns'

const SummaryUI = () => {
	const { data } = useContext(Context);
	const now = format(new Date(), 'YYYY-MM-DD')
	const procList = data.filter(({ status, procDate }) => status === 1)
	const nowProcList = data.filter(({ status, procDate }) => status === 1 && procDate === now)
	return (
		<div>
			<div>
				오늘은 { nowProcList.length }건을 처리했습니다.
			</div>
			<div>
				전체 { data.length }건 중 { procList.length }건을 처리했습니다.
			</div>
		</div>
	)
}

export default SummaryUI
