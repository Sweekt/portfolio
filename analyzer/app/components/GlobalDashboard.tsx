import React, { useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, Legend } from 'recharts';

export const GlobalDashboard = ({ globalStats, mmrHistory, mmrHistoryByDay, chartMode, setChartMode }) => {

	// --- 1. SÉCURITÉ : Pas de données ---
	if (!globalStats || globalStats.games === 0) {
		return (
			<div
				className="mb-10 bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 p-12 flex flex-col items-center justify-center opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]"
				style={{ width: '100%', minHeight: '400px' }}
			>
				<div className="w-16 h-16 mx-auto mb-4 bg-gray-900 rounded-full flex items-center justify-center shadow-inner border border-gray-700">
					<svg className="w-8 h-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
					</svg>
				</div>
				<h2 className="text-xl font-bold text-gray-300 mb-2">No data for the selected queue</h2>
				<p className="text-gray-500 text-sm">Play some matches in this game mode to unlock your statistics.</p>
			</div>
		);
	}

	// --- 2. PRÉPARATION DES DONNÉES MULTI-COURBES ---
	const availableQueues = Object.keys(mmrHistory).sort();

	// Une palette de couleurs bien visibles pour différencier les courbes
	const COLORS = ['#8b5cf6', '#3b82f6', '#f97316', '#10b981', '#ec4899', '#eab308'];

	// Le mixeur : On fusionne toutes les files dans un seul tableau pour Recharts
	const combinedData = useMemo(() => {
		if (chartMode === 'game') {
			const data = [];
			let maxLength = 0;
			availableQueues.forEach(q => { if (mmrHistory[q].length > maxLength) maxLength = mmrHistory[q].length; });

			for (let i = 0; i < maxLength; i++) {
				const entry = { match: i + 1 };
				availableQueues.forEach(q => {
					if (mmrHistory[q][i]) {
						entry[q] = mmrHistory[q][i].mmr;
						entry[`${q}_deck`] = mmrHistory[q][i].deck; // On cache le deck ici pour le tooltip !
					}
				});
				data.push(entry);
			}
			return data;
		} else {
			// Mode "Per Day"
			const dateMap = {};
			availableQueues.forEach(q => {
				mmrHistoryByDay[q].forEach(item => {
					if (!dateMap[item.date]) dateMap[item.date] = { date: item.date };
					dateMap[item.date][q] = item.mmr;
				});
			});
			return Object.values(dateMap).sort((a, b) => new Date(a.date) - new Date(b.date));
		}
	}, [mmrHistory, mmrHistoryByDay, chartMode, availableQueues]);

	// --- 3. TOOLTIP INTELLIGENT ---
	// Il s'adapte maintenant pour afficher toutes les courbes qui passent par ce point
	const CustomTooltip = ({ active, payload, label }) => {
		if (active && payload && payload.length) {
			return (
				<div className="bg-gray-800 border border-gray-600 p-3 rounded-lg shadow-xl min-w-[180px]">
					<p className="font-bold text-gray-300 mb-2 border-b border-gray-700 pb-1">
						{chartMode === 'game' ? `Match #${label}` : `Day : ${label}`}
					</p>
					{payload.map((entry, index) => (
						<div key={index} className="mb-2 last:mb-0">
							<div className="flex justify-between items-center gap-4">
								<span style={{ color: entry.color }} className="text-sm font-bold">{entry.name} :</span>
								<span className="text-white font-bold">{entry.value}</span>
							</div>
							{/* Affiche le deck joué si on est en mode "Per Game" */}
							{chartMode === 'game' && entry.payload[`${entry.name}_deck`] && (
								<p className="text-gray-500 text-xs ml-2 mt-0.5">- {entry.payload[`${entry.name}_deck`]}</p>
							)}
						</div>
					))}
				</div>
			);
		}
		return null;
	};

	// --- 4. CALCUL DES STATS ---
	const winRate = ((globalStats.wins / globalStats.games) * 100).toFixed(1);
	const playRateOtp = ((globalStats.otpGames / globalStats.games) * 100).toFixed(1);
	const otpWinRate = globalStats.otpGames > 0 ? ((globalStats.otpWins / globalStats.otpGames) * 100).toFixed(1) : "0.0";
	const otdWinRate = globalStats.otdGames > 0 ? ((globalStats.otdWins / globalStats.otdGames) * 100).toFixed(1) : "0.0";
	const winRateColor = (globalStats.wins / globalStats.games) >= 0.5 ? 'text-green-400' : 'text-red-400';

	return (
		<div className="mb-10 bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 p-6 flex flex-col lg:flex-row gap-8 opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]">

			<div className="w-full lg:w-1/3 flex flex-col justify-center">
				<h2 className="text-xl font-bold mb-6 text-gray-200">Global Overview</h2>
				<div className="grid grid-cols-2 gap-4">
					<div className="bg-gray-900/60 p-4 rounded-xl border border-gray-700/50 hover:bg-gray-900 transition-colors">
						<p className="text-xs text-gray-400 font-medium mb-1 uppercase tracking-wide">Overall Win Rate</p>
						<p className={`text-2xl font-bold ${winRateColor}`}>{winRate}%</p>
						<p className="text-xs text-gray-500 mt-1">{globalStats.wins}W - {globalStats.games - globalStats.wins}L</p>
					</div>
					<div className="bg-gray-900/60 p-4 rounded-xl border border-gray-700/50 hover:bg-gray-900 transition-colors">
						<p className="text-xs text-gray-400 font-medium mb-1 uppercase tracking-wide">Play Rate (OTP)</p>
						<p className="text-2xl font-bold text-blue-400">{playRateOtp}%</p>
						<p className="text-xs text-gray-500 mt-1">Started {globalStats.otpGames} times</p>
					</div>
					<div className="bg-gray-900/60 p-4 rounded-xl border border-gray-700/50 hover:bg-gray-900 transition-colors">
						<p className="text-xs text-gray-400 font-medium mb-1 uppercase tracking-wide">OTP Win Rate</p>
						<p className="text-2xl font-bold text-gray-200">{otpWinRate}%</p>
					</div>
					<div className="bg-gray-900/60 p-4 rounded-xl border border-gray-700/50 hover:bg-gray-900 transition-colors">
						<p className="text-xs text-gray-400 font-medium mb-1 uppercase tracking-wide">OTD Win Rate</p>
						<p className="text-2xl font-bold text-gray-200">{otdWinRate}%</p>
					</div>
				</div>
			</div>

			<div className="w-full lg:w-2/3 bg-gray-900/40 rounded-xl border border-gray-700/50 p-4 flex flex-col min-h-[22rem]">
				<div className="flex justify-between items-center mb-2">
					<h3 className="text-sm text-gray-400 font-medium uppercase tracking-wide">MMR Evolution</h3>
					{availableQueues.length > 0 && (
						<div className="flex bg-gray-900 rounded-lg p-1 border border-gray-700">
							<button onClick={() => setChartMode('game')} className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${chartMode === 'game' ? 'bg-blue-500 text-white shadow-sm' : 'text-gray-400 hover:text-white'}`}>Per Game</button>
							<button onClick={() => setChartMode('day')} className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${chartMode === 'day' ? 'bg-blue-500 text-white shadow-sm' : 'text-gray-400 hover:text-white'}`}>Per Day</button>
						</div>
					)}
				</div>

				{availableQueues.length > 0 ? (
					<div className="flex-grow w-full mt-2">
						<ResponsiveContainer width="100%" height="100%">
							<LineChart data={combinedData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
								<CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
								<XAxis dataKey={chartMode === 'game' ? 'match' : 'date'} stroke="#6b7280" tick={{ fontSize: 11 }} minTickGap={20} />
								<YAxis stroke="#6b7280" tick={{ fontSize: 11 }} domain={['dataMin - 10', 'dataMax + 10']} />
								<RechartsTooltip content={<CustomTooltip />} />
								<Legend verticalAlign="top" height={36} iconType="circle" wrapperStyle={{ fontSize: '12px', color: '#9ca3af' }}/>

								{availableQueues.map((queue, index) => {
									const lineColor = COLORS[index % COLORS.length];

									return (
										<Line
											key={queue}
											type="monotone"
											name={queue}
											dataKey={queue}
											stroke={lineColor}
											strokeWidth={2.5}
											dot={{ r: 2, fill: lineColor, strokeWidth: 0 }}
											activeDot={{ r: 5, fill: lineColor, stroke: '#fff', strokeWidth: 2 }}
											connectNulls={true}
											animationDuration={1500}
										/>
									);
								})}
							</LineChart>
						</ResponsiveContainer>
					</div>
				) : (
					<div className="flex-grow flex items-center justify-center text-gray-500 font-medium bg-gray-900/20 rounded-lg border border-gray-800 border-dashed">
						No MMR data available.
					</div>
				)}
			</div>
		</div>
	);
};