import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appTheme'

interface Props {
    text: string;
    color?: string;
    ancho?: boolean;
    action: ( buttonText: string ) => void;
}

export const Button = ({ text, color = '#2D2D2D', ancho = false, action }: Props) => {
    return (
        <TouchableOpacity
            onPress={ () => action( text ) }
        >
            <View style={{
                ...styles.button,
                backgroundColor: color,
                width: (ancho) ? 180 : 80,
            }}>
                <Text style={{
                    ...styles.buttonText,
                    color: (color === '#9B9B9B') ? 'black' : 'white',
                    //textAlign: ( ancho ) ? 'left' : 'center',
                }}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}
