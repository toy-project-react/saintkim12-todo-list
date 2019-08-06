import React from 'react'
import useSearchFilter from 'containers/SearchFilter'
import { STATUS_LIST as convertStatusList} from 'constants/Constant'

const SearchUI = () => {
	const { search: { text, statusFilter = 'all' }, updateParam } = useSearchFilter()
	const onParamChanged = updateParam
	return (
		<div>
			<div>
				<input type="text" name="text" placeholder="검색" value={ text } onChange={ onParamChanged }/>
			</div>
			<div>
				<label><input name="statusFilter" type="radio" value="all" checked={ statusFilter === 'all' } onChange={ onParamChanged }/>전체</label>
				{ convertStatusList.map(({ status, text }) => (
					<label key={ status }><input name="statusFilter" type="radio" value={ status } checked={ statusFilter === status } onChange={ onParamChanged }/>{ text }</label>
				)) }
			</div>
		</div>
	)
}

export default SearchUI
