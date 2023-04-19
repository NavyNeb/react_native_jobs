import React from 'react'
import { View, Text, TouchableOpacity, Image} from 'react-native'

import styles from './popularjobcard.style'
import { checkImageURL } from '../../../../utils'


const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {
  return (
    <TouchableOpacity 
      style = {styles.container(selectedJob, item)}
      onPress={ ()=>  handleCardPress(item)}
    >
      <TouchableOpacity>
        <Image
          resizeMode='contain'
          style = {styles.logoImage} 
          source={{ uri: checkImageURL(item.employer_logo) ?
            item.employer_logo :
            '../../../../assets/favicon.png' }} />
      </TouchableOpacity>
      <Text style = {styles.companyName} >{ item?.employer_name }</Text>

      <View style={ styles.infoContainer } >
        <Text 
          numberOfLines={1} 
          style = {styles.jobName(selectedJob, item)} > 
          { item?.job_title } 
        </Text>
        <Text style = {styles.location} >
          { item.job_country }
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default PopularJobCard 