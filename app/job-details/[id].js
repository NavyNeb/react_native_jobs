import  React, { useCallback, useState } from 'react';
import { Text, View, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl } from 'react-native';
import { useRouter, useSearchParams, Stack } from 'expo-router';

import { JobAbout, Company, JobFooter, JobTabs,
     SearchHeaderBtn, Specifics } from '../../components';
import { COLORS, SIZES, icons } from '../../constants';
import useFetch from '../../hook/useFetch';


const JobDetails = ()=> {

    const params = useSearchParams()
    const router = useRouter()

    const { isLoading, data, error, refetch } = useFetch(
        'job-details',
        {
            job_id: params.id
        }
    )

    return (
        <SafeAreaView style = {{ flex: 1, backgroundColor: COLORS.lightWhite }} >
            <Stack.Screen>

            </Stack.Screen>
        </SafeAreaView>
    )
}

export default JobDetails