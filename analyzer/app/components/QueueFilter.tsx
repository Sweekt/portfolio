import React from 'react';

export const QueueFilter = ({ selectedQueue, onSelectQueue }) => {
	return (
		<div className="flex mb-8 animate-[fadeInUp_0.5s_ease-out]">
			<div className="relative flex w-full max-w-[450px] p-1 bg-gray-900/60 rounded-xl border border-gray-700/50 shadow-inner">

				<div
					className={`absolute top-1 bottom-1 w-[calc(33.33%-2.6px)] rounded-lg transition-all duration-300 ease-out shadow-lg ${
						selectedQueue === 'global' ? 'left-1 bg-purple-600 shadow-purple-500/40' :
							selectedQueue === 'set 11' ? 'left-[calc(33.33%+1.3px)] bg-blue-600 shadow-blue-500/40' :
								'left-[calc(66.66%+1.3px)] bg-orange-600 shadow-orange-500/40'
					}`}
				/>

				<button
					onClick={() => onSelectQueue('global')}
					className={`flex-1 relative z-10 py-2.5 text-sm font-bold transition-colors duration-300 ${
						selectedQueue === 'global' ? 'text-white' : 'text-gray-400 hover:text-gray-200'
					}`}
				>
					🌍 Global
				</button>

				<button
					onClick={() => onSelectQueue('set 11')}
					className={`flex-1 relative z-10 py-2.5 text-sm font-bold transition-colors duration-300 ${
						selectedQueue === 'set 11' ? 'text-white' : 'text-gray-400 hover:text-gray-200'
					}`}
				>
					⚔️ Set 11
				</button>

				<button
					onClick={() => onSelectQueue('infinity')}
					className={`flex-1 relative z-10 py-2.5 text-sm font-bold transition-colors duration-300 ${
						selectedQueue === 'infinity' ? 'text-white' : 'text-gray-400 hover:text-gray-200'
					}`}
				>
					♾️ Infinity
				</button>
			</div>
		</div>
	);
};