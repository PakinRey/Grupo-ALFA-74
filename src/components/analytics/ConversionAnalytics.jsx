import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Chart from 'chart.js/auto';
// npm install chart.js
import { useConversion } from '/src/hooks/useConversion.jsx';
import styles from './ConversionAnalytics.module.scss';

// --- Iconos ---
const AnalyticsIcon = () => <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>;
const CloseIcon = () => <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>;

export const ConversionAnalytics = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { conversions } = useConversion();
    const chartRef = useRef(null); // Ref para el elemento <canvas>
    const chartInstanceRef = useRef(null); // Ref para guardar la instancia del gráfico

    const dateTimeFormatter = new Intl.DateTimeFormat('es-MX', {
        dateStyle: 'medium',
        timeStyle: 'medium',
    });

    useEffect(() => {
        // --- Lógica mejorada para el gráfico ---
        if (isModalOpen && chartRef.current) {
            // Procesa los datos para agruparlos por tipo y contarlos
            const conversionCounts = conversions.reduce((acc, conv) => {
                acc[conv.type] = (acc[conv.type] || 0) + 1;
                return acc;
            }, {});

            // Destruye cualquier gráfico anterior para evitar errores
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
            }

            // Crea la nueva instancia del gráfico
            const ctx = chartRef.current.getContext('2d');
            chartInstanceRef.current = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: Object.keys(conversionCounts),
                    datasets: [{
                        label: 'Número de Conversiones',
                        data: Object.values(conversionCounts),
                        backgroundColor: 'rgba(156, 204, 60, 0.6)',
                        borderColor: 'rgba(110, 180, 63, 1)',
                        borderWidth: 2,
                        borderRadius: 5,
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { display: false },
                        title: {
                            display: true,
                            text: 'Conversiones por Tipo de Evento',
                            font: { size: 16 }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: { stepSize: 1 }
                        }
                    }
                }
            });
        }

        // --- Función de limpieza ---
        // Se ejecuta cuando el modal se cierra, destruyendo el gráfico para liberar memoria.
        return () => {
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
                chartInstanceRef.current = null;
            }
        };
    }, [isModalOpen, conversions]); // Se actualiza solo cuando cambia el estado del modal o los datos.

    const totalConversions = conversions.length;
    const uniqueConversionTypes = new Set(conversions.map(c => c.type)).size;

    return (
        <>
            <motion.button
                className={styles.floatingButton}
                onClick={() => setIsModalOpen(true)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Mostrar analíticas de conversión"
            >
                <AnalyticsIcon />
            </motion.button>

            <AnimatePresence>
                {isModalOpen && (
                    <div className={`${styles.modalOverlay} ${styles.visible}`}>
                         <motion.div
                            className={`${styles.modalContent} ${styles.visible}`}
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 50, scale: 0.9 }}
                            transition={{ duration: 0.3, ease: 'easeOut' }}
                        >
                            <header className={styles.modalHeader}>
                                <h2>Panel de Conversiones (Simulación)</h2>
                                <button onClick={() => setIsModalOpen(false)}><CloseIcon /></button>
                            </header>
                            
                            <div className={styles.metricsDashboard}>
                                <aside className={styles.summaryCards}>
                                    <div className={styles.card}>
                                        <p className={styles.label}>Conversiones Totales</p>
                                        <p className={styles.value}>{totalConversions}</p>
                                    </div>
                                    <div className={styles.card}>
                                        <p className={styles.label}>Tipos de Evento Únicos</p>
                                        <p className={styles.value}>{uniqueConversionTypes}</p>
                                    </div>
                                </aside>

                                <div className={styles.chartContainer}>
                                    <canvas ref={chartRef}></canvas>
                                </div>
                                
                                <div className={styles.eventLog}>
                                    <h3>Registro de Eventos Recientes</h3>
                                    <ul>
                                        {[...conversions].reverse().slice(0, 10).map(conv => (
                                            <li key={conv.id}>
                                                <span className={styles.eventType}>{conv.type}</span>
                                                <span className={styles.eventTime}>{dateTimeFormatter.format(conv.timestamp)}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
};