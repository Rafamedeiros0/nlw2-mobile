import React from 'react'
import { View, Image, Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

import styles from './styles'

function TeacherItem() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image 
          style={styles.avatar} 
          source={{ uri: 'https://github.com/rafamedeiros0.png' }}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>Rafael Medeiros</Text>
          <Text style={styles.subject}>Educação física</Text>
        </View>
      </View>

      <Text style={styles.bio}>
        Entusiata das melhores tecnologias de química avançada.
        {'\n'}{'\n'}
        Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através da experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {'   '}
          <Text style={styles.priceValue}>R$ 30,00</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton style={[styles.favoriteButton, styles.favorited]}>
            {/* <Image source={heartOutlineIcon}></Image> */}
            <Image source={unfavoriteIcon}></Image>
          </RectButton>

          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon}></Image>
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>

    </View>
  )
}

export default TeacherItem