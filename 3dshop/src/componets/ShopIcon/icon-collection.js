export const bar = ({ width = '34', height = '24', color = '', className = '', stroke = 'black' }) => (
    <svg className={className} width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill={color} xmlns="http://www.w3.org/2000/svg">
        <path stroke={stroke} d="M1 12H18.3112M1 1H33M1 23H33" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

export const search = ({ width = '30', height = '30', color, className = '', stroke }) => (
    <svg className={className} width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill={color} xmlns="http://www.w3.org/2000/svg">
        <path stroke={stroke} d="M22.5387 20.7713L27.8925 26.1238L26.1238 27.8925L20.7713 22.5387C18.7797 24.1353 16.3025 25.0036 13.75 25C7.54 25 2.5 19.96 2.5 13.75C2.5 7.54 7.54 2.5 13.75 2.5C19.96 2.5 25 7.54 25 13.75C25.0036 16.3025 24.1353 18.7797 22.5387 20.7713ZM20.0312 19.8438C21.6176 18.2124 22.5036 16.0255 22.5 13.75C22.5 8.915 18.5837 5 13.75 5C8.915 5 5 8.915 5 13.75C5 18.5837 8.915 22.5 13.75 22.5C16.0255 22.5036 18.2124 21.6176 19.8438 20.0312L20.0312 19.8438Z" fill="#06070D" />
    </svg>
)

export const heart = ({ width = '20', height = '20', color, className = '', stroke = 'black' }) => (
    <svg className={className} width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill={color} xmlns="http://www.w3.org/2000/svg">
        <path stroke={stroke} d="M17.3666 3.84172C16.941 3.41589 16.4356 3.0781 15.8794 2.84763C15.3232 2.61716 14.727 2.49854 14.1249 2.49854C13.5229 2.49854 12.9267 2.61716 12.3705 2.84763C11.8143 3.0781 11.3089 3.41589 10.8833 3.84172L9.99994 4.72506L9.1166 3.84172C8.25686 2.98198 7.0908 2.49898 5.87494 2.49898C4.65908 2.49898 3.49301 2.98198 2.63327 3.84172C1.77353 4.70147 1.29053 5.86753 1.29053 7.08339C1.29053 8.29925 1.77353 9.46531 2.63327 10.3251L3.5166 11.2084L9.99994 17.6917L16.4833 11.2084L17.3666 10.3251C17.7924 9.89943 18.1302 9.39407 18.3607 8.83785C18.5912 8.28164 18.7098 7.68546 18.7098 7.08339C18.7098 6.48132 18.5912 5.88514 18.3607 5.32893C18.1302 4.77271 17.7924 4.26735 17.3666 3.84172V3.84172Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

