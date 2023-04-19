import React from 'react'
import { View, Text, TouchableOpacity, Image} from 'react-native'

import styles from './nearbyjobcard.style'
import { checkImageURL } from '../../../../utils'


const NearbyJobCard = ({ job, handleNavigate }) => {
  return (
    <TouchableOpacity 
      style = {styles.container}
      onPress={ ()=>  handleNavigate()}
    >
      <TouchableOpacity>
        <Image
          resizeMode='contain'
          style = {styles.logoImage} 
          source={{ uri: checkImageURL(job.employer_logo) ?
            job.employer_logo :
            '../../../../assets/favicon.png' }} />
      </TouchableOpacity>
      <View style={ styles.textContainer } >
        <Text 
          numberOfLines={1} 
          style = {styles.jobName} > 
          { job?.job_title } 
        </Text>
        <Text style = {styles.jobType} >
          { job.job_employment_type }
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default NearbyJobCard 